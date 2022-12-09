import React, { useCallback, useEffect, useState } from "react";
import { Text, TopicCard } from "../../components";
import SearchLayout from "../../layouts/search";
import { Item } from "../api/interface/search/topics";
import { UseSearchContext } from "../../context/SearchContext";
import basePoint from "../api/basePoint";

const Topics = () => {
  const { search } = UseSearchContext();
  const [topics, setTopics] = useState<Item[]>([]);

  const getTopics = useCallback(async () => {
    try {
      const res = await basePoint.get(`search/topics?q=${search}&per_page=6`);

      console.log(res.data);
      setTopics(res.data.items);
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  useEffect(() => {
    getTopics();
  }, [getTopics]);
  return (
    <div>
      <Text variant="p1" weight="semiBold" className="mb-5">
        2 topic results
      </Text>

      {topics.map((data: Item, index: number) => (
        <TopicCard key={index} name={data.name} />
      ))}
    </div>
  );
};

Topics.PageLayout = SearchLayout;

export default Topics;
