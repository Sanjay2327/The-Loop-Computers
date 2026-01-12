// // import {lin} from 'react-router-dom';

// // export default function Home() {
// //   return (
// //     <>
// //       {/* HERO */}
// //       <section
// //         className="h-[85vh] flex items-center justify-center text-center text-white"
// //         style={{
// //           backgroundImage:
// //             "url('https://images.unsplash.com/photo-1518770660439-4636190af475')",
// //           backgroundSize: "cover",
// //           backgroundPosition: "center",
// //         }}
// //       >
// //         <div className="bg-black/60 p-10 rounded-xl max-w-2xl">
// //           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
// //             Smart Tech. <br />
// //             <span className="text-blue-400">Second Life.</span>
// //           </h1>

// //           <p className="mt-6 text-lg text-gray-300">
// //             Giving powerful machines a second chance —  
// //             reliable, affordable, and built for performance.
// //           </p>
// //         </div>
// //       </section>
// //       {/* CATEGORIES */}
// //       <section className="py-20 bg-zinc-950 text-white">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <h2 className="text-3xl font-bold text-center mb-12">
// //             Explore Our Products
// //           </h2>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             {[
// //               { title: "Refurbished Laptops", emoji: "💻" },
// //               { title: "Custom PCs", emoji: "🖥️" },
// //               { title: "Accessories", emoji: "⌨️" },
// //             ].map((cat) => (
// //               <div
// //                 key={cat.title}
// //                 className="bg-zinc-900 rounded-xl p-8 text-center hover:scale-105 transition border border-white/10"
// //               >
// //                 <div className="text-5xl mb-4">{cat.emoji}</div>
// //                 <h3 className="text-xl font-semibold">{cat.title}</h3>
// //                 <p className="text-gray-400 mt-3">
// //                   Performance, reliability, and value — all in one place.
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //  );
// // }

// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="w-full">
//       {/* HERO SECTION */}
//       <section
//         className="relative h-[85vh] w-full bg-cover bg-center flex items-center justify-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=80')",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/70"></div>

//         {/* Content */}
//         <div className="relative z-10 text-center px-6">
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//             Smart Tech.
//             <span className="block text-indigo-400 mt-2">Second Life.</span>
//           </h1>

//           <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
//             Premium refurbished laptops, custom PCs, and trusted accessories —
//             performance reborn.
//           </p>

//           <div className="mt-8 flex gap-4 justify-center">
//             <Link
//               to="/shop"
//               className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-medium"
//             >
//               Shop Now
//             </Link>

//             <Link
//               to="/shop"
//               className="px-6 py-3 rounded-lg border border-zinc-500 hover:bg-zinc-800 transition font-medium"
//             >
//               Explore
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CATEGORIES SECTION */}
//       <section className="py-20 bg-zinc-950">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           What We Offer
//         </h2>

//         <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
//           {/* Laptops */}
//           <div className="group bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition">
//             <h3 className="text-2xl font-semibold mb-3">
//               Refurbished Laptops
//             </h3>
//             <p className="text-zinc-400 mb-6">
//               Tested, trusted, and tuned for performance.
//             </p>
//             <Link
//               to="/shop"
//               className="text-indigo-400 font-medium group-hover:underline"
//             >
//               Browse Laptops →
//             </Link>
//           </div>

//           {/* Custom PC */}
//           <div className="group bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition">
//             <h3 className="text-2xl font-semibold mb-3">Custom PCs</h3>
//             <p className="text-zinc-400 mb-6">
//               Built for gaming, workstations, and creators.
//             </p>
//             <Link
//               to="/shop"
//               className="text-indigo-400 font-medium group-hover:underline"
//             >
//               Build Your PC →
//             </Link>
//           </div>

//           {/* Accessories */}
//           <div className="group bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition">
//             <h3 className="text-2xl font-semibold mb-3">Accessories</h3>
//             <p className="text-zinc-400 mb-6">
//               Keyboards, mice, SSDs, RAM, and more.
//             </p>
//             <Link
//               to="/shop"
//               className="text-indigo-400 font-medium group-hover:underline"
//             >
//               View Accessories →
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// .2
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="w-full">
//       {/* HERO SECTION */}
//       <section
//         className="relative h-[85vh] w-full bg-cover bg-center flex items-center justify-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=80')",
//         }}
//       >
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black/80"></div>

//         {/* Content */}
//         <div className="relative z-10 text-center px-6">
//           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
//             Smart Tech.
//             <span className="block text-indigo-400 mt-2">
//               Second Life.
//             </span>
//           </h1>

//           <p className="mt-6 text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto">
//             Premium refurbished laptops, custom PCs, and trusted accessories —
//             performance reborn.
//           </p>

//           <div className="mt-10 flex gap-4 justify-center">
//             <Link
//               to="/shop"
//               className="px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold text-white shadow-lg shadow-indigo-600/30"
//             >
//               Shop Now
//             </Link>

//             <Link
//               to="/shop"
//               className="px-7 py-3 rounded-xl border border-zinc-400 text-zinc-100 hover:bg-zinc-800 transition font-semibold"
//             >
//               Explore
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CATEGORIES SECTION */}
//       <section className="py-20 bg-zinc-950 text-white">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           What We Offer
//         </h2>

//         <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
//           {/* Laptops */}
//           <div className="group bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition border border-zinc-800">
//             <h3 className="text-2xl font-semibold mb-3 text-indigo-400">
//               Refurbished Laptops
//             </h3>
//             <p className="text-zinc-300 mb-6">
//               Tested, trusted, and tuned for performance.
//             </p>
//             <Link
//               to="/shop"
//               className="text-white font-medium group-hover:text-indigo-400"
//             >
//               Browse Laptops →
//             </Link>
//           </div>

//           {/* Custom PC */}
//           <div className="group bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition border border-zinc-800">
//             <h3 className="text-2xl font-semibold mb-3 text-indigo-400">
//               Custom PCs
//             </h3>
//             <p className="text-zinc-300 mb-6">
//               Built for gaming, workstations, and creators.
//             </p>
//             <Link
//               to="/shop"
//               className="text-white font-medium group-hover:text-indigo-400"
//             >
//               Build Your PC →
//             </Link>
//           </div>

//           {/* Accessories */}
//           <div className="group bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition border border-zinc-800">
//             <h3 className="text-2xl font-semibold mb-3 text-indigo-400">
//               Accessories
//             </h3>
//             <p className="text-zinc-300 mb-6">
//               Keyboards, mice, SSDs, RAM, and more.
//             </p>
//             <Link
//               to="/shop"
//               className="text-white font-medium group-hover:text-indigo-400"
//             >
//               View Accessories →
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import bg from "../assets/logo.png"; // 🔁 apni bg image yahin use ho rahi hai

export default function Home() {
  return (
    <><section
      className="relative h-[90vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl px-6 animate-fadeUp">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Smart Tech. <br />
          <span className="text-indigo-400 drop-shadow-lg">
            Second Life.
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-zinc-300">
          Refurbished laptops, custom PCs & accessories —
          performance that feels new, prices that don’t.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/shop"
            className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition font-semibold shadow-lg"
          >
            Shop Laptops
          </Link>

          <Link
            to="/shop"
            className="px-8 py-3 rounded-full border border-white/30 hover:bg-white/10 transition font-semibold"
          >
            Build Custom PC
          </Link>
        </div>
      </div>
    </section>
      {/* /* CATEGORY SECTION  */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-14">
            Explore Our Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* LAPTOPS */}
            <div className="group bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-indigo-500 transition">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Refurbished Laptops
              </h3>
              <p className="text-zinc-400 mb-6">
                High-performance laptops, professionally tested and affordable.
              </p>
              <span className="text-indigo-400 font-medium group-hover:underline">
                Browse Laptops →
              </span>
            </div>

            {/* CUSTOM PC */}
            <div className="group bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-indigo-500 transition">
              <div className="text-5xl mb-4">🖥️</div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Custom PCs
              </h3>
              <p className="text-zinc-400 mb-6">
                Built for gaming, creators, and professionals.
              </p>
              <span className="text-indigo-400 font-medium group-hover:underline">
                Build Your PC →
              </span>
            </div>

            {/* ACCESSORIES */}
            <div className="group bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-indigo-500 transition">
              <div className="text-5xl mb-4">⌨️</div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Accessories
              </h3>
              <p className="text-zinc-400 mb-6">
                Keyboards, mice, SSDs, RAM, and more.
              </p>
              <span className="text-indigo-400 font-medium group-hover:underline">
                View Accessories →
              </span>
            </div>

          </div>
        </div>
      </section></>

  );
}
