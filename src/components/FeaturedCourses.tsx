"use client"
import courseData from "../data/programming_courses.json"
import {BackgroundGradient} from "./ui/background-gradient"
import Link from "next/link";
interface Course{
    courseId: string;
    title: string;
    slug: string;
    difficultyLevel: string;
    category: string;
    isFeatured: boolean;
    enrollmentCount: number;
    media: {
        thumbnailUrl: string;
        coverImageUrl: string;
    };
}
export default function FeaturedCourses(){
    const featuredCourses = courseData.courses.filter((course:Course)=>course.isFeatured);

    return (
        <section className="py-14 bg-slate-950 overflow-hidden">
           <div className="relative px-6 lg:px-10">
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sky-600/20 to-transparent pointer-events-none" />
              <div className="relative max-w-5xl mx-auto text-center">
                <p className="inline-flex rounded-full bg-sky-500/10 text-sky-200 px-4 py-1 text-sm font-semibold tracking-[0.24em] uppercase shadow-sm shadow-sky-500/20">
                  Curated Excellence
                </p>
                <h2 className="mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl">
                  Featured Courses
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  Explore premium programs handpicked for ambitious learners, with stunning visuals, expert-led paths, and real-world skill mastery.
                </p>
              </div>

              <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {featuredCourses.map((course:Course)=>(
                  <BackgroundGradient
                    key={course.courseId}
                    containerClassName="w-full"
                    className="w-full"
                  >
                    <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
                      <div className="relative h-48 overflow-hidden bg-slate-900/80">
                        <img
                          src={course.media.coverImageUrl}
                          alt={course.title}
                          loading="lazy"
                          onError={(event) => {
                            const target = event.target as HTMLImageElement
                            if (target.src !== course.media.thumbnailUrl) {
                              target.src = course.media.thumbnailUrl
                            } else {
                              target.src = "/globe.svg"
                            }
                          }}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-4">
                          <span className="inline-flex rounded-full bg-slate-950/70 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-sky-200 shadow-lg shadow-slate-950/30">
                            {course.category}
                          </span>
                        </div>
                      </div>

                      <div className="relative z-10 px-5 pb-6 pt-5 text-white">
                        <div className="flex items-center justify-between gap-2 text-xs text-slate-300">
                          <span className="inline-flex rounded-full bg-slate-900/80 px-2.5 py-1 font-medium text-sky-200">
                            {course.difficultyLevel}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 text-slate-300">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-sky-400"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.95c.3.921-.755 1.688-1.539 1.118l-3.369-2.449a1 1 0 00-1.176 0l-3.37 2.45c-.783.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.05 9.377c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.95z" /></svg>
                            {course.enrollmentCount.toLocaleString()} learners
                          </span>
                        </div>

                        <h3 className="mt-4 text-xl font-semibold leading-tight tracking-tight text-white">
                          {course.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-slate-300">
                          {course.slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())}
                        </p>

                        <div className="mt-5 flex flex-wrap items-center gap-2">
                          <span className="rounded-2xl bg-sky-500/15 px-3 py-1.5 text-xs font-semibold text-sky-200 backdrop-blur-sm">
                            Live project labs
                          </span>
                          <span className="rounded-2xl bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                            Industry-grade curriculum
                          </span>
                        </div>

                        <Link
                          href={`/courses/${course.slug}`}
                          className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-400"
                        >
                          Explore course
                        </Link>
                      </div>

                      <div className="pointer-events-none absolute -right-8 top-10 h-24 w-24 rounded-full bg-sky-500/20 blur-3xl" />
                      <div className="pointer-events-none absolute left-5 top-16 h-16 w-16 rounded-full bg-fuchsia-500/20 blur-3xl" />
                    </article>
                  </BackgroundGradient>
                ))}
              </div>

              <div className="mt-16 text-center">
                <Link href="/courses" className="inline-flex rounded-full border border-slate-500/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-400/50 hover:bg-slate-900/80">
                   View all courses
                </Link>
              </div>
           </div>
        </section>
    )
}