import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Teacher", href: "#Teacher" },
  { label: "Gallery", href: "#Gallery" },
  { label: "Contact", href: "#contact" },
];

const courses = [
  { title: "Nursery to UKG", grades: "Early Childhood", text: "Learning through play, storytelling, numbers, letters and creative activities." },
  { title: "Primary School", grades: "Grades 1–5", text: "Building strong foundations in reading, math, science and art through hands-on activities." },
  { title: "Basic Level", grades: "Grades 6–8", text: "Developing subject skills, critical thinking, group projects and computer skills." },
];

const teachers = [
  { name: "Tilaram Parajuli", role: "Principal", image: "/tilaram.png" },
  { name: "Rabin B.K", role: "Vice Principal", image: "/rabin.png" },
  { name: "Arun Gurung", role: "Teacher", image: "/arun.png" },
  { name: "Karna Maya Tamang", role: "Teacher", image: "/karan.png" },
  { name: "Rebika Rai", role: "Teacher", image: "/rebika.jpeg" },
  { name: "Rabina Rai", role: "Teacher", image: "/rabina.png" },
  { name: "Uttam Limbu", role: "Teacher", image: "/uttam.jpeg" },
  { name: "Sabina Karki", role: "Teacher", image: "/sabina.png" },
  { name: "Saraswati Shrestha", role: "Teacher", image: "/puja.png" },
  { name: "Prakash Rai", role: "Teacher", image: "/prakash.png" },
  { name: "Som Kumari Gurung", role: "Teacher", image: "/soma.png" },
  { name: "Prabina Rai", role: "Teacher", image: "/prabina.png" },
  { name: "Bindu Tamang", role: "Teacher", image: "/bindu.png" },
  { name: "Eliza Sherpa", role: "Account", image: "/aliza.png" },
  { name: "Asha Tamang", role: "Teacher", image: "/asha.jpeg" },
  { name: "Sujita Subba Limbu", role: "Teacher", image: "/sujita.png" },
  { name: "Mangal Gurung", role: "Gate Keeper", image: "/mangal.png" },
  { name: "Urmila Tamang", role: "Office Helper", image: "/urmila.png" },
  { name: "Dil Kumar Bk", role: "Office Helper", image: "/dilkumari.png" },
];

const stats = [
  { value: "250+", label: "Students" },
  { value: "19+", label: "Teachers" },
  { value: "18+", label: "Years of teaching" },
];

/*
  UNIFIED COLOR SCHEME
  Main Background: slate-50 (consistent soft neutral background)
  Cards / Navbar: white (clean contrast with soft shadows)
  Accents: emerald-700 / emerald-800 / emerald-900 (vibrant green hierarchy)
*/

const photos = [
  { id: 1, src: "/extra/sirmam.jpeg", title: "School Family" },
  { id: 2, src: "/extra/mam.jpeg", title: "Female Staff" },
  { id: 3, src: "/extra/sir.jpeg", title: "Male Staff" },
  { id: 4, src: "/extra/class.jpeg", title: "Classroom Learning" },
  { id: 5, src: "/extra/cuninashirt.jpeg",title: "School Shirts" },
  { id: 6, src: "/extra/cunindress.jpeg",  title: "class 8 5th Batch" },
  { id: 7, src: "/extra/dance.jpeg", title: "Dance Program" },
  { id: 8, src: "/extra/line.jpeg", title: "Student Assembly" },
  { id: 9, src: "/extra/8 class.jpeg", title: "Class 8 4th batch" },
  { id: 10, src: "/extra/picnic.jpeg", title: "School Picnic" },
  { id: 11, src: "/extra/prize.jpeg",title: "Prize Distribution" },
  { id: 12, src: "/extra/program.jpeg", title: "Outdoor Program" },
  { id: 13, src: "/extra/scout.jpeg",  title: "Scout Training" },
  { id: 14, src: "/extra/scout2.jpeg",  title: "Scout Fitness" },
  { id: 15, src: "/extra/bag.jpeg", title: "Bag Distribution" },
  { id: 16, src: "/extra/1.jpeg",  title: "School Activity" },  //change this photo later
  { id: 17, src: "/extra/tshirt.jpeg",  title: "T-Shirt Distribution Program" },
  { id: 18, src: "/extra/win.jpeg",  title: "Victory Celebration" },  
  { id: 19, src: "/first.jpeg",  title: "Gaupalika Basic Level Topper" },
  { id: 20, src: "/2nd.jpeg",  title: "Gaupalika Basic Level Topper" },
   { id: 21, src: "/schoolfirst.jpeg",  title: "School view" },
  { id: 22, src: "/schoolsecond.jpeg",  title: "school view" },
];

export default function App() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 font-sans scroll-smooth">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md text-emerald-950 shadow-sm border-b border-emerald-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Arun Valley English School Logo"
              className="h-12 w-12 rounded-full border border-emerald-100 bg-white p-1 object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-lg font-bold tracking-tight text-emerald-900 group-hover:text-emerald-700 transition-colors">
              Arun Valley English School
            </span>
          </a>

          <nav className="hidden gap-8 md:flex items-center font-medium text-slate-700">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-emerald-700"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden rounded-lg border border-emerald-600 px-3 py-1.5 text-sm font-medium text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-3 px-4 pb-4 pt-3 md:hidden bg-white border-t border-emerald-100">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1 font-medium text-slate-700 hover:text-emerald-700"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="scroll-mt-24 relative overflow-hidden bg-slate-50 text-slate-800 border-b border-slate-200/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-16 pb-16 md:grid-cols-2 md:py-20">
          {/* Left Column: Text & CTAs */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-emerald-950 md:text-5xl lg:text-6xl leading-tight">
              Learn today.<br />
              <span className="text-emerald-700">Lead tomorrow.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              Arun Valley English School gives every child a safe, supportive, and inspiring environment to learn, play, and grow into future leaders.
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-emerald-700 px-6 py-3.5 font-semibold text-white shadow-md hover:bg-emerald-800 transition-all hover:-translate-y-0.5"
              >
                Apply for admission
              </a>
              <a
                href="#courses"
                className="rounded-lg border border-emerald-700/80 bg-white px-6 py-3.5 font-semibold text-emerald-800 shadow-sm hover:bg-emerald-50/50 transition-all"
              >
                See classes
              </a>
            </div>
          </div>
          {/* Right Column: School Image */}
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="relative overflow-hidden rounded-3xl shadow-xl border border-emerald-100 bg-white group">
            <div className="group relative w-full overflow-hidden rounded-2xl shadow-lg">
  <img
    src="/school.jpeg"
    alt="Arun Valley English School Campus"
    loading="lazy"
    className="aspect-[4/3] w-full object-cover object-center sm:aspect-[16/10] lg:aspect-[16/9] max-h-[500px] transition-transform duration-700 ease-out group-hover:scale-105"
  />
  {/* Optional soft gradient so overlaid text stays readable */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
</div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="scroll-mt-24 border-b border-slate-200/60 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-6 px-4 py-10 text-center">
          {stats.map((s) => (
            <div key={s.label} className="p-2">
              <p className="text-3xl font-extrabold text-emerald-900 md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-600 md:text-base">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 bg-slate-50 border-b border-slate-200/60">
        <div className="mx-auto max-w-4xl px-4 py-20">
          <h2 className="text-3xl font-bold text-emerald-950">
            About our school
            <span className="mt-2 block h-1 w-16 rounded bg-emerald-600"></span>
          </h2>
          <p className="mt-6 leading-relaxed text-slate-700 text-lg">
            Arun Valley English School was established in 2065 B.S. with a vision of providing quality
            education and creating opportunities for every student. Through the Cunina Scholarship
            Program, families with two children studying at our school are eligible for scholarship
            support for both children, while families with one child may also have the opportunity to
            receive a scholarship. This initiative helps reduce the financial burden on parents and
            supports children's continued education and future studies. Our school is committed to
            providing quality education through dedicated and experienced teachers, a supportive
            learning environment, well-equipped classrooms, science and computer facilities, and a
            spacious playground for sports and extracurricular activities. We focus on academic
            excellence, discipline, creativity, and all-round personality development, helping every
            student grow with confidence and work toward a brighter future.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="scroll-mt-24 bg-slate-50 border-b border-slate-200/60 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-emerald-950">
            Our classes
            <span className="mt-2 block h-1 w-16 rounded bg-emerald-600"></span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {courses.map((c) => (
              <div key={c.title} className="rounded-xl border border-slate-200/80 border-t-4 border-t-emerald-600 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-emerald-950">{c.title}</h3>
                <p className="mt-1 text-sm font-medium text-emerald-700">{c.grades}</p>
                <p className="mt-3 text-slate-600 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher */}
      {/* Teacher */}
<section
  id="Teacher"
  className="scroll-mt-20 border-b border-slate-200/60 bg-slate-50 py-12 sm:py-16 lg:py-20"
>
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="mb-8 text-center sm:mb-10">
      <h2 className="text-2xl font-bold text-emerald-950 sm:text-3xl lg:text-4xl">
        Meet Our Teachers
        <span className="mx-auto mt-2 block h-1 w-12 rounded bg-emerald-600 sm:w-16"></span>
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
        Dedicated educators inspiring students to learn, grow, and succeed.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
      {teachers.map((teacher, index) => (
        <div
          key={`${teacher.name}-${index}`}
          className="overflow-hidden rounded-xl border border-slate-200/80 bg-white text-center shadow-sm transition hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg"
        >
          <div className="aspect-[4/5] w-full bg-slate-100 p-2 sm:p-3">
            <img
              src={teacher.image}
              alt={teacher.name}
              loading="lazy"
              className="h-full w-full rounded-lg object-cover object-top"
            />
          </div>

          <div className="p-3 sm:p-5">
            <h3 className="text-sm font-bold text-emerald-950 sm:text-base lg:text-lg">
              {teacher.name}
            </h3>
            <p className="mt-1 text-xs font-medium text-emerald-700 sm:text-sm">
              {teacher.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Gallery */}
      <section id="Gallery" className="scroll-mt-24 bg-slate-50 border-b border-slate-200/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
               Gallery
              <span className="mx-auto mt-2 block h-1 w-16 rounded bg-emerald-600"></span>
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Explore our school memories, events, activities, and student achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                className="group relative overflow-hidden rounded-xl shadow-sm bg-white border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-300"
              >
                <div className="w-full h-64 overflow-hidden bg-slate-100">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-md font-semibold text-emerald-950">{photo.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 bg-slate-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-emerald-950">
              Contact us
              <span className="mt-2 block h-1 w-16 rounded bg-emerald-600"></span>
            </h2>
            <div className="mt-6 space-y-2 text-slate-700">
              <p><span className="font-semibold text-emerald-900">Address:</span> Num, Makalu-5</p>
              <p><span className="font-semibold text-emerald-900">Phone:</span> +9744905560</p>
              <p><span className="font-semibold text-emerald-900">Email:</span> arunvalley123@gmail.com</p>
              <p className="pt-2 text-slate-600"><span className="font-semibold text-emerald-900">Office hours:</span> Mon-Fri, 9 AM – 4 PM</p>
            </div>
          </div>

          <div className="space-y-4 bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <input 
              type="text" 
              placeholder="Your name" 
              className="w-full rounded-lg border border-slate-300 bg-slate-50/50 p-3 text-slate-800 focus:border-emerald-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-colors" 
            />

           <div className="flex rounded-lg border border-slate-300 bg-slate-50/50 focus-within:border-emerald-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-emerald-200 transition-colors overflow-hidden">
                <span className="flex items-center pl-3 text-slate-500 font-medium text-sm select-none">
                  +977
                </span>
                <input 
                  type="tel" 
                  placeholder="98XXXXXXXX" 
                  maxLength={10}
                  pattern="[0-9]{10}"
                  className="w-full bg-transparent p-3 text-slate-800 focus:outline-none" 
                />
              </div>


            <textarea 
              rows="4" 
              placeholder="Your message" 
              className="w-full rounded-lg border border-slate-300 bg-slate-50/50 p-3 text-slate-800 focus:border-emerald-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-colors" 
            />
            <button
              onClick={() => setSent(true)}
              className="w-full sm:w-auto rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white hover:bg-emerald-800 transition-colors shadow-sm"
            >
              Send message
            </button>
            {sent && <p className="text-emerald-700 font-medium">Message sent. We will reply soon.</p>}
          </div>
        </div>
      </section>

      {/* Footer */}
 {/* Footer */}
<footer className="bg-white text-gray-800 border-t border-gray-200">

  <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.4fr]">

    {/* School Brand */}
    <div className="flex items-start gap-3 sm:col-span-2 lg:col-span-1">
      <img
        src="/logo.png"
        alt="Arun Valley English School Logo"
        className="h-12 w-12 rounded-full bg-white object-contain"
      />
      <div>
        <h2 className="text-lg font-bold leading-tight text-emerald-900">
          Arun Valley English School
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Num, Makalu-5, Sankhuwasabha
        </p>
      </div>
    </div>

    {/* Faculty + Contact: side by side on mobile, flattened into the parent grid on sm+ */}
    <div className="grid grid-cols-2 gap-6 sm:col-span-2 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-[1fr_1.2fr]">

      {/* Faculty */}
      <div>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-emerald-900">
          Faculty
        </h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>
            <a href="#Teacher" className="transition hover:text-emerald-700">
              Our Teachers
            </a>
          </li>
          <li>
            <a href="#about" className="transition hover:text-emerald-700">
              About Our School
            </a>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-emerald-900">
          Contact Us
        </h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="break-all">
            <a
              href="mailto:arunvalley123@gmail.com"
              className="transition hover:text-emerald-700"
            >
              arunvalley123@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+9744905560" className="transition hover:text-emerald-700">
              +9744905560
            </a>
          </li>
        </ul>
      </div>

    </div>

    {/* Location */}
    <div className="sm:col-span-2 lg:col-span-1">
      <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-emerald-900">
        Location
      </h3>
      <div className="h-36 w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4085.4015521364477!2d87.28191807589594!3d27.55308323227715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e895bf41fc49e1%3A0x40f6ace595fd743a!2sArun%20Valley%20English%20School%20Num!5e1!3m2!1sen!2snp!4v1793695831381!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Arun Valley English School Location"
        />
      </div>
    </div>

  </div>

  {/* Copyright */}
  <div className="border-t border-gray-200">
    <div className="mx-auto max-w-7xl px-6 py-3 text-center sm:text-left">
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} Arun Valley English School. All Rights Reserved.
      </p>
    </div>
  </div>

</footer>
      
    </div>
  );
}