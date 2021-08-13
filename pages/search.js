import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ jsonSearchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, guests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${guests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm">
            300 + stays - {range} - for {guests} number of guests
          </p>
          <h1 className="font-semibold text-3xl mt-2 mb-4">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation Fexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          {jsonSearchResults.map(
            ({ location, title, description, img, star, price, total }) => (
              <div className="flex flex-col">
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  price={price}
                  total={total}
                  star={star}
                />
              </div>
            )
          )}
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[500px]">
          <Map jsonSearchResults={jsonSearchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const searchResults = await fetch("https://links.papareact.com/isz");
  const jsonSearchResults = await searchResults.json();
  console.log(jsonSearchResults);

  return {
    props: {
      jsonSearchResults,
    },
  };
}
