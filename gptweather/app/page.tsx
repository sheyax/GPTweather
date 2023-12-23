"use client";
import Image from "next/image";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import CityPicker from "@/components/CityPicker";
export default function Home() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E]
    p-10 flex flex-col justify-center"
    >
      <Card className="bg-white max-w-4xl mx-auto rounded-lg">
        <Text className="text-6xl font-bold text-center mb-10">
          GPT Weather
        </Text>
        <Subtitle className="text-xl text-center">
          Powered by GPT 3 and NextJs
        </Subtitle>
        <Divider className="my-10" />

        <Card className=" rounded-lg bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          {/* City Picker component */}
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
