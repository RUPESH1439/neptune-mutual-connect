import { CryptoConverter } from "@/components";

const main =
  "flex min-h-screen flex-col items-center justify-center p-2 bg-blue-dark";

const container = "flex flex-col gap-16 items-center";
const title = "text-white text-3xl ";

export default function Home() {
  return (
    <main className={main}>
      <div className={container}>
        <span className={title}>NEPTUNE MUTUAL</span>
        <CryptoConverter />
      </div>
    </main>
  );
}
