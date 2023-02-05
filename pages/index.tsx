import { useEffect, useState } from "react";
import { NextGetter } from "@/lib/Axios";
export default function Home() {
  const [data, setData] = useState<object>({});

  const getter = async () => {
    try {
      const request = await NextGetter("/api/get", {});
      return setData(request.data);
    } catch (e) {
      return setData({
        data: {
          status: "Failure",
          message: "Request Failure",
        },
      });
    }
  };

  useEffect(() => {
    getter();
  }, []);

  return (
    <div>
      <p className="text-3xl font-bold underline">/ GET API From Backend</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
