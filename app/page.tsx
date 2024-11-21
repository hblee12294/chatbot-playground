import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-dvh grid grid-cols-[300px_1fr]">
      <div className="h-full overflow-auto border-r-[1px]">Side</div>
      <div className="h-full grid grid-rows-[1fr_200px]">
        <div className="min-h-0 overflow-auto">chat</div>
        <div className="p-8">
          <div className="max-w-xl m-auto h-full">
            <form action="">
              <Textarea className="resize-none h-full"></Textarea>
              <div className="flex justify-end mt-4">
                <Button>Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
