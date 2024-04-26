import { Course } from '../types/courses';

export const getCreditsSum = (courses: Course[]): string => {
  const creditsSum = courses
    .reduce((acc, course) => acc + course.courseCredits, 0)
    .toString();
  return creditsSum ? creditsSum : '';
};
