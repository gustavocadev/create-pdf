import { Hono } from 'hono';
import PDFDocument from 'pdfkit-table';
import { contabilidadCourses } from '../data/contabilidadCursos';
import { computacionCourses } from '../data/computacionInformaticaCursos';

const app = new Hono();

const doc = new PDFDocument();

app.get('/courses', async (c) => {
  c.header('Content-Type', 'application/pdf');
  c.header('Content-Disposition', 'attachment; filename="courses.pdf"');
  // my pdf

  doc.table({
    headers: ['Codigo', 'Semestre', 'Nombre', 'Credits'],
    rows: contabilidadCourses.map((course) => [
      course.code,
      String(course.semester),
      course.name,
      String(course.courseCredits),
    ]),
    title: 'Cursos Contabilidad',
  });

  doc.table({
    headers: ['Codigo', 'Semestre', 'Nombre', 'Credits'],
    rows: computacionCourses.map((course) => [
      course.code,
      String(course.semester),
      course.name,
      String(course.courseCredits),
    ]),
    title: 'Cursos Computacion',
  });

  doc.end();

  // @ts-ignore
  return c.body(doc);
});

export default app;
