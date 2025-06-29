import { Input } from "~/components";
import { ExampleIcon1 } from "./exampleIcon1";

export default function Home() {
  return (
    <div className="flex-grow stack --gap-2 px-4">
      <div>państwa-miasta</div>

      <div className="flex-grow stack --justify-center">
        <Input
          start={<ExampleIcon1 />}
          end={<ExampleIcon1 />}
          placeholder="Enter name"
          className="text-125"
        />
      </div>
    </div>
  );
}
