import Container from "../component/Container";
import Heading from "../component/Heading";
import ListingCard from "../component/listing/ListingCard";
import { SafeListing, SafeUser } from "../types"

interface FavoritesClientProps {
    listings: SafeListing[];
    currentUser?: SafeUser | null;
}

const FavoriteClient: React.FC<FavoritesClientProps> = ({
    listings, 
    currentUser
}) => {
  return (
    <Container>
        <Heading title="Favorites" subtitle="List of your favorite places!" />
        <div className="
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
        ">
            {listings.map( (listing) => (
                <ListingCard
                    currentUser={currentUser}
                    key={listing.id}
                    data={listing}
                />
            ))}
        </div>
    </Container>
  )
}

export default FavoriteClient