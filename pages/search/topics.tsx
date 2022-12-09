import React from "react";
import { Text, TopicCard } from "../../components";
import SearchLayout from "../../layouts/search";
import { FetchTopics } from "../api/swr/FetchTopics";
import { Item } from "../api/interface/search/topics";

const Repositories = () => {
  const { data, isError } = FetchTopics();

  if (isError) return "An error has occurred.";
  if (!data) return "Loading data...";
  if (!data.items) return "Loading items...";
  return (
    <div>
      <Text variant="p1" weight="semiBold" className="mb-5">
        {data.total_count} topic results
      </Text>

      {data.items.map((data: Item, index: number) => (
        <TopicCard key={index} name={data.name} />
      ))}
    </div>
  );
};

Repositories.PageLayout = SearchLayout;

export default Repositories;
