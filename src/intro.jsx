export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-left">
      <img src="logo_blu.svg" className="w-3/5 mb-3" alt="logo" />
      <p className="pb-10 text-white text-xl">
        Basta con gli affitti troppo costosi, ora c&apos;è Jobéd.
        <strong> Risparmia 300€ sul tuo affitto mensile</strong> e trova il
        lavoro dei tuoi sogni!
      </p>
      <div className="join">
        <input className="input join-item" placeholder="tua@mail.it" />
        <button className="input font-bold text-white bg-primary join-item">
          Lo voglio!
        </button>
      </div>
    </div>
  );
}