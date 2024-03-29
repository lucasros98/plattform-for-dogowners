import FAQ from "@/components/FAQ";

export default function About({ data }) {
    return (
        <>
            <div className="py-12 bg-gray-100">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:7/12 lg:w-6/12">
                            <h1 className="text-2xl text-gray-900 font-bold md:text-4xl">Om oss</h1>
                            <p className="mt-6 text-gray-600">Hundvalpen är ett bra sätt att få hjälp med din nya hund. På plattformen kan göra quiz, prata med andra hundägare och följa din valps utveckling.
                            </p>
                            <p className="mt-4 text-gray-600">Målet med hundvalpen är framförallt att göra det enklare för hundägare att få tillgång till bästa möjliga information så att de kan fatta välgrundade beslut om sin nya hund. Hundvalpen är också ett utmärkt sätt att få kontakt med andra valpägare.</p>
                        </div>
                        <div className="md:5/12 lg:w-5/12">
                            <img src={"/static/dog.svg"} layout='fill' />

                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-white ">
        <div className='container  px-5 mx-auto'>
          <section className="text-gray-700">
            <div className="container px-5 py-16 mx-auto">
              <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                  Vanliga frågor
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                  Nedan listar vi några av de vanligaste frågorna som vi brukar få.
                </p>
              </div>
              <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="w-full lg:w-1/2 px-4 py-1">
                <FAQ question={"Behöver man ha valp för att använda er tjänst?"} content={"Du behöver inte ha en valp för att använda vår tjänst. Alla hundälskare är välkomna."} />
                  <FAQ question={"Varför finns dinhundvalp?"} content={"Att skaffa hundvalp kan vara svårt, det var något som vi ville hjälpa nya hundägare med."} />
                  <FAQ question={"Hur skapar jag ett konto?"} content={"Du kan skapa konto genom att klicka på Skapa konto knappen."} />
                </div>
                <div className="w-full lg:w-1/2 px-4 py-1">
                  <FAQ question={"Kan man få rådgivning från er?"} content={"Nej, vi ger ingen rådgivning till hundägare."} />
                  <FAQ question={"Har ni digitala valpkurser?"} content={"I nuläget har vi inga digitala hundkurser för hundägare."} />
                  <FAQ question={"Har ni en app för mobilen?"} content={"Just nu finns vi endast som webbtjänst."} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
           
        </>
    );
}