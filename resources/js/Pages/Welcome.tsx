import { PageProps } from '@/types';
import WelcomeNavbar from '@/Components/Ui/WelcomeNavbar';

export default function Welcome({ auth }: PageProps) {
  return (
    <div >
        <WelcomeNavbar />
    </div>
  );
}
