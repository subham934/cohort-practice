import React from 'react'
import { useNavigate } from 'react-router'
const Courses = () => {
    const Navigate = useNavigate()
  const courses = [
    { level: 'Beginner', title: 'Cohort 1', lessons: '12 lessons', time: '6 weeks', color: 'from-violet-500 to-fuchsia-500', link: '/courses/cohort1' },
    { level: 'Popular', title: 'Modern web development', lessons: '24 lessons', time: '10 weeks', color: 'from-cyan-400 to-blue-500' },
    { level: 'Intermediate', title: 'Product thinking', lessons: '16 lessons', time: '8 weeks', color: 'from-amber-300 to-orange-500' },
    { level: 'New', title: 'Creative leadership', lessons: '10 lessons', time: '5 weeks', color: 'from-emerald-400 to-cyan-500' },
  ]

  return (
    <main id="courses" className="min-h-screen bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
      <section className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[.25em] text-cyan-300">Explore courses</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-black tracking-[-0.05em] sm:text-6xl">Find your next creative challenge.</h1>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">Focused paths built around practical work, generous feedback, and skills that stick.</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {courses.map((course, index) => (
            <article key={course.title} onClick={()=> course.link && Navigate(course.link)} className="group flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 cursor-pointer p-5 transition hover:border-white/20 hover:bg-white/[.08] sm:flex-row sm:items-center ">
              <div className={`grid h-36 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${course.color} sm:w-40`}>
                <span className="text-4xl font-black text-slate-950/80">0{index + 1}</span>
              </div>
              <div className="flex flex-1 flex-col self-stretch py-2">
                <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-300">{course.level}</span>
                <h2 className="mt-4 text-2xl font-bold">{course.title}</h2>
                <div className="mt-auto flex items-center justify-between pt-5 text-sm text-slate-400"><span>{course.lessons} · {course.time}</span><span className="grid h-9 w-9 place-items-center rounded-full bg-white text-lg text-slate-950 transition group-hover:bg-cyan-300">↗</span></div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Courses
