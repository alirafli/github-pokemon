import React, { useCallback, useEffect, useState } from "react";
import { Meta, Text, TopicCard } from "../../components";
import SearchLayout from "../../layouts/search";
import { UseSearchContext } from "../../context/SearchContext";
import { githubBasePoint } from "../../api/basePoint";
import { TopicsProps } from "../../api/interface/search/topics";

const Topics = () => {
  const { search } = UseSearchContext();
  const [topics, setTopics] = useState([]);

  const getTopics = useCallback(async () => {
    try {
      const res = await githubBasePoint.get(
        `search/topics?q=${search}&per_page=6`
      );

      // console.log(res.data);
      setTopics(res.data.items);
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  useEffect(() => {
    getTopics();
  }, [getTopics]);
  if (topics.length === 0) return `there is no "${search}" topics`;
  return (
    <div>
      <Meta subTitle="Search-Topics" />
      <Text variant="p1" weight="semiBold" className="mb-5">
        topic results
      </Text>

      {topics.map((data: TopicsProps, index: number) => (
        <TopicCard key={index} name={data.name} />
      ))}
    </div>
  );
};

Topics.PageLayout = SearchLayout;

export default Topics;
