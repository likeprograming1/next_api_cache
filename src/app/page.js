"use client";

const Page = () => {
  const handleTest = async () => {
    try {
      const res = await fetch("/api/data", {
        next: {
          revalidate: 1000,
        },
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log("Click", error);
    }
  };

  return <button onClick={() => handleTest()}>Page</button>;
};

export default Page;
