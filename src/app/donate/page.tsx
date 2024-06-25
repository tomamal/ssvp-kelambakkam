import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import DonateForm from "@/forms/donate-form";
import EnrolForm from "@/forms/enrol-form";
import Image from "next/image";

export default function DonatePage() {
  return (
    <MaxWidthWrapper className="space-y-8 py-10 bg-white">
      <div className=" mx-auto space-y-2 max-w-[450px]">
        <h3 className="text-5xl font-semibold capitalize tracking-tight text-center">
          Make your gift today
        </h3>
        <p className="text-center text-muted-foreground font-poppins text-xl">
          Your donation, whether big or small, supports vital services to feed,
          clothe, house and heal the most vulnerable neighbors.
        </p>
      </div>
      <h2 className="text-2xl font-shippori_mincho font-semibold capitalize">
        Together, we can make a lasting difference in our local communities.
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        <p className="text-base font-poppins text-muted-foreground">
          There is someone struggling right now who has called the Society of St
          Vincent de Paul (SSVP) to ask for help. We are here to respond. Will
          you help us help them? With the support of compassionate people like
          you, the SSVP stands ready to extend the helping hand of friendship to
          those experiencing loneliness, desperation and hardship. By making a
          donation today, you have the power to make a difference to
          someone&apos;s life by offering them hope, reassurance and a chance
          for a better future.
        </p>
        <Image
          src="/ssvp-child-1.jpg"
          alt="sunday collections"
          width={926}
          height={513}
          className="w-full md:w-[50%] aspect-[10/5] flex-shrink-0 flex-grow-0 object-cover "
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <BankCreditDetails />
        <DonateForm />
      </div>
      <p className="text-xl text-destructive font-sue_ellen_francisco font-medium">
        Thank you to all who have humbly, quietly and faithfully contributed to
        our ministry
      </p>
    </MaxWidthWrapper>
  );
}

const BankCreditDetails = () => {
  return (
    <div className="flex flex-col gap-2 md:w-[50%] bg-stone-300">
      <div className="max-w-72 mx-auto space-y-2 m-4 p-2">
        <h3 className="text-xl font-medium font-poppins capitalize">
          Make a difference, today.
        </h3>
        <p className="text-sm text-[#2E4049] font-poppins">
          Support the SSVP and its members to provide help to individuals and
          families in need.
        </p>
      </div>
      <div className="bg-white mx-4 my-2 p-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <span className="text-sm">Account Name: </span>
            <span className="text-sm font-shippori_mincho font-semibold">
              Society of St Vincent De Paul
            </span>
          </div>

          <div className="flex gap-2">
            <span className="text-sm">Account Number: </span>
            <span className="text-sm font-shippori_mincho font-semibold">
              xxxxxxxxxxxxxxx
            </span>
          </div>

          <div className="flex gap-2">
            <span className="text-sm">Account Type:</span>
            <span className="text-sm font-shippori_mincho font-semibold">
              Savings Bank
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-sm">Bank Name:</span>
            <span className="text-sm font-shippori_mincho font-semibold">
              Indian Bank
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-sm">Bank Branch:</span>
            <span className="text-sm font-shippori_mincho font-semibold">
              Kelambakkam
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-sm">IFSC code:</span>
            <span className="text-sm font-shippori_mincho font-semibold">
              xxxxxxxxxxx
            </span>
          </div>
        </div>
      </div>
      <p className="text-xs font-shippori_mincho font-semibold p-4">
        Kindly fill in the form alongside, to reach us the details of your
        remittance, for us to acknowledge your constributions
      </p>
    </div>
  );
};

