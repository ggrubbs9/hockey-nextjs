import { Input } from "@mantine/core";
import { getHotkeyHandler } from "@mantine/hooks";
import { IconAt } from "@tabler/icons-react";
import { useState } from "react";

export default function Search() {
  // use endpoint to grab player id:
  // https://search.d3.nhle.com/api/v1/search/player?culture=en-us&limit=20&q=kane

  const [value, setValue] = useState("");

  const handleSubmit = () => {
    console.log(value);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Welcome to Search</h1>
      <Input
        placeholder="Your email"
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={getHotkeyHandler([["Enter", handleSubmit]])}
        leftSection={<IconAt size={16} />}
      />
    </div>
  );
}
