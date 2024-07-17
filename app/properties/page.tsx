import EmptyState from '../component/EmptyState';
import ClientOnly from '../component/ClientOnly'

import getCurrentUser from '../actions/getCurrentUser';
import PropertyClient from './PropertyClient';
import getListings from '../actions/getListings';

const PropertiesPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState title="unauthorized" subtitle='Please log in'/>
            </ClientOnly>
        );
    }

    const listings = await getListings({
        userId: currentUser.id
    });

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No properties found"
                    subtitle='It seems you have no property'
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <PropertyClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default PropertiesPage;