import SecurityForm from "@/components/auth/SecurityForm";

const page = () => {
  return (
    <div className="max-w-screen-sm w-full mx-auto">
      <SecurityForm redirectUrl={"/account/settings"} />;
    </div>
  );
};

export default page;
