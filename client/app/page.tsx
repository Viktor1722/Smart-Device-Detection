import Image from "next/image";
import { Toggle } from "@/components/ui/toggle";
import lightLine from "@/public/light_line.svg";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 mt-10">
      <div className="flex gap-10">
        <Link href={"/lamps"}>
          <Card className="w-[300px]">
            <CardHeader className="flex">
              <CardTitle>
                Calex c60CW{" "}
                <Toggle className="ml-16">
                  <Image src={lightLine} alt={""} />
                </Toggle>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </Link>

        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>
              Calex c60{" "}
              <Toggle className="ml-16">
                <Image src={lightLine} alt={""} />
              </Toggle>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
