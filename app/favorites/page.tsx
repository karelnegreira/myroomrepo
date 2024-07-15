
import EmptyState from "../component/EmptyState";
import ClientOnly from "../component/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoriteClient from "./FavoriteClient";

const FavoritePage = async () => {
    const favoriteListings = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if (favoriteListings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="No favorites found"
                    subtitle="Looks that you have no favolites listing"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <FavoriteClient 
                listings={favoriteListings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default FavoritePage