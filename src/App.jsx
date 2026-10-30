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
  { name: "Tilaram Parajuli", role: "Principle", image: "/tilaram.jpg" },
  { name: "Rabin B.K", role: "Vice Teacher", image: "/rabin.jpg" },
  { name: "Karna Maya Tamang", role: "Teacher", image: "/karna.jpg" },
  { name: "Surendra Rai", role: "Teacher", image: "/surendra.jpg" },
  { name: "Uttam Limbu", role: "Teacher", image: "/uttam.jpg" },
  { name: "Dhan BDR Gurung", role: "Teacher", image: "/Arun.jpg" },
  { name: "Sabina Karki", role: "Teacher", image: "/sabina.jpg" },
  { name: "Sarswati Shrestha", role: "Teacher", image: "/puja.jpg" },
  { name: "Parivartan Rai", role: "Teacher", image: "/parivartan.jpg" },
  { name: "Som Kumari Gurung", role: "Teacher", image: "/soma.jpg" },
  { name: "Rabina Rai", role: "Teacher", image: "/rebika.jpg" },
  { name: "Bindu Tamang", role: "Teacher", image: "/beendu.jpg" },
  { name: "Eliza Sherpa", role: "Teacher", image: "/eliza.jpg" },
  { name: "Sujita Subba Limbu", role: "Teacher", image: "/sujita.jpg" },
  { name: "Mangal Gurung", role: "Teacher", image: "/mangal.jpg" },
  { name: "Asha Tamang", role: "Teacher", image: "/asha.jpg" },
  { name: "Prabina Rai", role: "Teacher", image: "/teachers.jpg" },
  { name: "Urmila Tamang", role: "Teacher", image: "/teachers.jpg" },
  { name: "Dil Kumar Bk", role: "Teacher", image: "/teachers.jpg" },
];

const stats = [
  { value: "250+", label: "Students" },
  { value: "21+", label: "Teachers" },
  { value: "18+", label: "Years of teaching" },
];

/*
  COLOR SCHEME (white + green)
  White      : navbar, hero, about, teachers, footer
  Light green: green-50 -> stats, classes, contact (alternating sections)
  Green      : green-600 / green-700 / green-900 -> buttons, accents, headings
*/


const photos = [
  { id: 1, src: "/extra/sirmam.jpeg", alt: "All staff group photo", title: "Faculty & Staff" },
  { id: 2, src: "/extra/mam.jpeg", alt: "Female teachers group photo", title: "Female Faculty" },
  { id: 3, src: "/extra/sir.jpeg", alt: "Male teachers group photo", title: "Male Faculty" },
  { id: 4, src: "/extra/class.jpeg", alt: "Classroom session", title: "Classroom Learning" },
  { id: 5, src: "/extra/cuninashirt.jpeg", alt: "Cunina shirt distribution", title: "School Shirts" },
  { id: 6, src: "/extra/cunindress.jpeg", alt: "Cunina school uniforms", title: "School Uniforms" },
  { id: 7, src: "/extra/dance.jpeg", alt: "Cultural dance performance", title: "Dance Program" },
  { id: 8, src: "/extra/line.jpeg", alt: "Students in assembly line", title: "Student Assembly" },
  { id: 9, src: "/extra/8 class.jpeg", alt: "Class 8 classroom", title: "Class 8 Room" },
  { id: 10, src: "/extra/picnic.jpeg", alt: "School picnic outing", title: "School Picnic" },
  { id: 11, src: "/extra/prize.jpeg", alt: "Student winning a prize", title: "Prize Distribution" },
  { id: 12, src: "/extra/program.jpeg", alt: "Indoor school event", title: "Indoor Program" },
  { id: 13, src: "/extra/scout.jpeg", alt: "Scout training session", title: "Scout Training" },
  { id: 14, src: "/extra/scout2.jpeg", alt: "Scout activities", title: "Scout Fitness" },
  { id: 15, src: "/extra/bag.jpeg", alt: "School bag distribution", title: "Bag Distribution" },
  { id: 16, src: "/extra/1.jpeg", alt: "School campus activity", title: "Campus Activity" },
  { id: 17, src: "/extra/tshirt.jpeg", alt: "T-shirt distribution", title: "T-Shirt Program" },
  { id: 18, src: "/extra/win.jpeg", alt: "Inter-school win celebration", title: "Victory Celebration" },
];


export default function App() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans scroll-smooth">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white text-green-900 shadow-sm border-b border-green-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Arun Valley English School Logo"
              className="h-12 w-12 rounded-full border border-green-100 bg-white p-1 object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-lg font-bold tracking-tight text-green-900 group-hover:text-green-600 transition-colors">
              Arun Valley English School
            </span>
          </a>

          <nav className="hidden gap-8 md:flex items-center font-medium text-slate-700">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-green-700"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden rounded-lg border border-green-600 px-3 py-1.5 text-sm font-medium text-green-700 hover:bg-green-600 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-3 px-4 pb-4 pt-3 md:hidden bg-white border-t border-green-100">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1 font-medium text-slate-700 hover:text-green-700"
              >
          
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero Section */}
     <section id="home" className="scroll-mt-24 relative overflow-hidden bg-white text-slate-800">
  <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-24 pb-16 md:grid-cols-2 md:py-24">
          {/* Left Column: Text & CTAs */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-green-900 md:text-5xl lg:text-6xl leading-tight">
              Learn today.<br />
              <span className="text-green-600">Lead tomorrow.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              Arun Valley English School gives every child a safe, supportive, and inspiring environment to learn, play, and grow into future leaders.
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-green-700 px-6 py-3.5 font-semibold text-white shadow-lg hover:bg-green-800 transition-all hover:-translate-y-0.5"
              >
                Apply for admission
              </a>
              <a
                href="#courses"
                className="rounded-lg border border-green-700 px-6 py-3.5 font-semibold text-green-800 hover:bg-green-50 transition-all"
              >
                See classes
              </a>
            </div>
          </div>
          {/* Right Column: School Image */}
         <div className="relative mx-auto w-full max-w-md md:max-w-none">
  <div className="relative overflow-hidden rounded-3xl shadow-2xl border-2 border-green-100/80 bg-green-50 group">
    <img
      src="/school.jpg" // Replace with your actual image path
      alt="Arun Valley English School Campus"
      className="h-72 w-full object-cover sm:h-96 md:h-[400px] group-hover:scale-105 transition-transform duration-700 ease-out"
    />
    {/* Enhanced Subtle Overlay Gradient for Depth */}
    <div className="absolute inset-0 bg-gradient-to-t from-green-950/30 via-transparent to-transparent pointer-events-none"></div>
  </div>
</div>
        </div>
      </section>

      {/* Stats */}
      <section className="scroll-mt-24 border-b border-green-100 bg-green-50">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-6 px-4 py-10 text-center">
          {stats.map((s) => (
            <div key={s.label} className="p-2">
              <p className="text-3xl font-extrabold text-green-900 md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-600 md:text-base">{s.label}</p>
            </div>
          ))}
        </div>
      </section>





      {/* About */}

      <section id="about" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 pt-24 pb-16">
    
          <h2 className="text-3xl font-bold text-green-900">
            About our school
            <span className="mt-2 block h-1 w-16 rounded bg-green-600"></span>
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
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
       <section id="courses" className="scroll-mt-24 bg-green-50 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-green-900">
            Our classes
            <span className="mt-2 block h-1 w-16 rounded bg-green-600"></span>
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {courses.map((c) => (
              <div key={c.title} className="rounded-lg border border-green-100 border-t-4 border-t-green-600 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-green-900">{c.title}</h3>
                <p className="mt-1 text-sm font-medium text-green-700">{c.grades}</p>
                <p className="mt-3 text-slate-600">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher */}
   <section id="Teacher" className="scroll-mt-24 bg-white">
  <div className="mx-auto max-w-6xl px-4 pt-24 pb-16">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-green-900">
              Meet Our Teachers
              <span className="mx-auto mt-2 block h-1 w-16 rounded bg-green-600"></span>
            </h2>
            <p className="mt-3 text-slate-600">
              Dedicated educators inspiring students to learn, grow, and succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((teacher) => (
              <div
                key={teacher.role}
                className="overflow-hidden rounded-xl border border-green-100 bg-white text-center shadow-sm transition hover:-translate-y-1 hover:border-green-600 hover:shadow-lg"
              >
                <div className="flex h-64 items-center justify-center bg-green-50 p-4">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-green-900">
                    {teacher.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-green-700">
                    {teacher.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* gallery */}

<div id="Gallery" className="min-h-screen bg-gray-50 text-gray-800 pt-20">
  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    {/* Gallery Section with ID and proper scroll top margin */}
    <section id="gallery" className="scroll-mt-36">
      {/* Section Heading & Text */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Photo Gallery
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Explore our school memories, events, activities, and student achievements.
        </p>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="group relative overflow-hidden rounded-xl shadow-md bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="w-full h-64 overflow-hidden bg-gray-200">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-md font-semibold text-gray-900">{photo.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{photo.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </main>
</div>

      {/* Contact */}

 <section id="contact" className="scroll-mt-24 bg-green-50 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-green-900">
              Contact us
              <span className="mt-2 block h-1 w-16 rounded bg-green-600"></span>
            </h2>
            <p className="mt-4 text-slate-700">Address: Num,Makalu-5</p>
            <p className="text-slate-700">Phone: +9762980864</p>
            <p className="text-slate-700">Email: arunvalley@gmail.com</p>
            <p className="mt-2 text-slate-700">Office hours: Mon-Fri, 9 AM – 4 PM</p>
          </div>

          <div className="space-y-3">
            <input type="text" placeholder="Your name" className="w-full rounded border border-green-200 bg-white p-3 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-300" />
            <input type="email" placeholder="Your email" className="w-full rounded border border-green-200 bg-white p-3 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-300" />
            <textarea rows="4" placeholder="Your message" className="w-full rounded border border-green-200 bg-white p-3 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-300" />
            <button
              onClick={() => setSent(true)}
              className="rounded bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
            >
              Send message
            </button>
            {sent && <p className="text-green-700">Message sent. We will reply soon.</p>}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-100 bg-white py-6 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Arun Valley English School. All rights reserved.
      </footer>
    </div>
  );
}