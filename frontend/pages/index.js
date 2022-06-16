import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <div>
      <Hero />
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

    </div>
  )
}
