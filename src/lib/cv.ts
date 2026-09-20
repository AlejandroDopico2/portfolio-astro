import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

const yamlPath = join(process.cwd(), 'cv/Alejandro_Dopico-Castro_CV.yaml');

type Entry = {
  institution?: string;
  company?: string;
  area?: string;
  degree?: string;
  position?: string;
  location?: string;
  start_date?: string | null;
  end_date?: string | null;
  summary?: string | null;
  highlights?: string[];
  title?: string;
  authors?: string[];
  journal?: string;
  date?: string | number | null;
  url?: string;
  doi?: string | null;
  label?: string;
  details?: string;
};

type CvFile = {
  cv: {
    name: string;
    headline?: string;
    location?: string;
    sections: {
      education?: Entry[];
      experience?: Entry[];
      publications?: Entry[];
      awards?: Entry[];
      skills?: Entry[];
    };
  };
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function monthLabel(value?: string | null): string {
  if (!value || value === 'present') return 'present';
  const [year, month] = value.split('-');
  if (!month) return year;
  return `${MONTHS[Number(month) - 1] ?? month} ${year}`;
}

export function formatRange(start?: string | null, end?: string | null): string {
  if (!start && !end) return '';
  if (!start) return monthLabel(end);
  if (!end) return monthLabel(start);
  return `${monthLabel(start)} – ${monthLabel(end)}`;
}

function description(entry: Entry): string {
  if (entry.summary?.trim()) return entry.summary.trim();
  return (entry.highlights ?? []).join(' ');
}

function sortableDate(value?: string | null): number {
  if (!value || value === 'present') return Number.POSITIVE_INFINITY;
  const [year, month] = value.split('-').map(Number);
  return year * 100 + (month || 0);
}

function byCurrentThenRecent(a: Entry, b: Entry): number {
  const aCurrent = a.end_date === 'present';
  const bCurrent = b.end_date === 'present';
  if (aCurrent !== bCurrent) return aCurrent ? -1 : 1;
  if (aCurrent) return sortableDate(a.start_date) - sortableDate(b.start_date);
  return sortableDate(b.start_date) - sortableDate(a.start_date);
}

export function loadCv() {
  const raw = parse(readFileSync(yamlPath, 'utf8')) as CvFile;
  const sections = raw.cv.sections;

  const skills = (sections.skills ?? []).map((skill) => ({
    label: skill.label ?? '',
    details: skill.details ?? '',
  }));

  const tools = skills.filter((skill) => skill.label === 'Tools' || skill.label === 'Cloud');
  const groupedSkills = [
    { label: 'Programming', details: skills.find((skill) => skill.label === 'Programming')?.details ?? '' },
    { label: 'Machine Learning', details: skills.find((skill) => skill.label === 'ML Frameworks')?.details ?? '' },
    {
      label: 'Tools / Infrastructure',
      details: tools.map((skill) => skill.details).filter(Boolean).join(', '),
    },
    { label: 'Research', details: skills.find((skill) => skill.label === 'Research Areas')?.details ?? '' },
  ].filter((skill) => skill.details);

  return {
    name: raw.cv.name,
    headline: raw.cv.headline ?? '',
    location: raw.cv.location ?? '',
    education: (sections.education ?? []).map((entry) => ({
      place: entry.institution ?? '',
      title: [entry.degree, entry.area].filter(Boolean).join(' in '),
      dates: formatRange(entry.start_date, entry.end_date),
      note: entry.summary?.trim() || entry.highlights?.[0] || '',
    })),
    experience: [...(sections.experience ?? [])].sort(byCurrentThenRecent).map((entry) => ({
      place: entry.company ?? '',
      title: entry.position ?? '',
      location: entry.location ?? '',
      dates: formatRange(entry.start_date, entry.end_date),
      current: entry.end_date === 'present',
      description: description(entry),
    })),
    publications: (sections.publications ?? []).map((entry) => ({
      title: entry.title ?? '',
      venue: entry.journal ?? '',
      year: entry.date ? String(entry.date) : '',
      href: entry.url || '/research',
    })),
    awards: (sections.awards ?? []).map((entry) => ({
      title: entry.title ?? entry.position ?? '',
      place: entry.institution ?? entry.company ?? entry.journal ?? '',
      dates: formatRange(entry.start_date, entry.end_date) || (entry.date ? String(entry.date) : ''),
      description: description(entry),
    })),
    skills: groupedSkills,
  };
}
