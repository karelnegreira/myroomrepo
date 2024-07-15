
import EmptyState from "../component/EmptyState";
import ClientOnly from "../component/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";

const FavoritePage = async () => {
  return (
    <ClientOnly>
        <EmptyState 
            title="No favorites found"
            subtitle="Looks that you have no favolites listing"
        />
    </ClientOnly>
  )
}

export default FavoritePage