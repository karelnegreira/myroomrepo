import Container from "../component/Container";
import Heading from "../component/Heading";
import { SafeReservation, SafeUser } from "../types"

interface TripsClientProps {
    reservations: SafeReservation[];
    currentUser?: SafeUser | null;
}


const TripsClient: React.FC<TripsClientProps> = ({
    reservations, 
    currentUser
}) => {
  return (
    <Container>
        <Heading 
            title="Trips Experiences"
            subtitle="This is your travel record"
        />
    </Container>
  )
}

export default TripsClient;