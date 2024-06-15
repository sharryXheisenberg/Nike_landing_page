// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }

import { CustomerReviews , Footer , SpecialOffer , Subscribe , SuperQuality , Hero , PopularProducts, Services } from "./Sections";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main className="relative">
        <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b"> <Hero/> </section>
      <section className="padding"> <PopularProducts/> </section>
      <section className="padding"> <SuperQuality/> </section>
      <section className="padding-x py-10"> <Services/> </section>
      <section className="padding"> <SpecialOffer/> </section>
      <section className="bg-pale-blue padding"> <CustomerReviews/> </section>
      <section className="padding-x sm:py-32 py-16 w-full "> <Subscribe/> </section>
      <section className="bg-black padding-x padding-t pb-8"> <Footer/> </section>
      
    </main>
  );
};

export default App;
