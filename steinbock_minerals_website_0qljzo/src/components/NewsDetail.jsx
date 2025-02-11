import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { newsId } = useParams();

  // Placeholder news items - Replace with actual data fetching or CMS integration
  const newsItems = [
    {
      id: '1',
      title: 'Steinbock Minerals Expands Partnership with Yasheya Ltd.',
      date: '2024-01-15',
      content: 'We are excited to announce an expanded partnership with Yasheya Ltd. to further enhance our global logistics capabilities.',
    },
    {
      id: '2',
      title: 'Market Trends in Industrial Minerals: Q4 2023',
      date: '2023-12-20',
      content: 'Our latest analysis covers the key trends and developments in the industrial minerals market.',
    },
      {
        id: '3',
        title: 'Spotlight: Yasheya Ltd. - Innovating Supply Chain Solutions',
        date: '2024-02-10',
        content: 'An in-depth look at how our logistics partner, Yasheya Ltd., is revolutionizing the transportation of industrial minerals.',
      }
  ];

    const newsItem = newsItems.find(item => item.id === newsId);

     if (!newsItem) {
        return <div>News item not found.</div>;
    }

  return (
    <div className="container">
      <h1>{newsItem.title}</h1>
      <p className="date">{newsItem.date}</p>
      <p>{newsItem.content}</p>
    </div>
  );
};

export default NewsDetail;
