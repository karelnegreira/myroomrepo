import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations";
import ClientOnly from "../component/ClientOnly";
import EmptyState from "../component/EmptyState";
import ReservationsClient from "./ReservationsClient";


const ReservationPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="Unauthorized"
                    subtitle="Please login"
                />
            </ClientOnly>
        )
    }

    const reservations = await getReservations({
        authorId: currentUser.id
    });

    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="No reservation found"
                    subtitle="You might not have any reservation in your properties"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <ReservationsClient 
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default ReservationPage;