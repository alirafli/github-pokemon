import React from "react";
import { Text, TopicCard } from "../../components";
import { Topics } from "../../data";
import SearchLayout from "../../layouts/search";

const Repositories = () => {
  return (
    <div>
      <Text variant="p1" weight="semiBold" className="mb-5">
        149,157 topic results
      </Text>

      {Topics.map((data, index) => (
        <TopicCard key={index} name={data.name} />
      ))}
    </div>
  );
};

Repositories.PageLayout = SearchLayout;

export default Repositories;
