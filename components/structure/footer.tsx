import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-16 flex flex-col lg:flex-row items-center">
          <h3 className="text-xl lg:text-xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Copyright 2023 - Andrea Provino
            <span className="text-2xl">.</span>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://andreaprovino.it"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Homepage
            </a>
            <a
              target="_blank"
              href={`https://it.linkedin.com/in/andrea-provino`}
              className="mx-3 font-bold hover:underline"
            >
              Linkedin
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
