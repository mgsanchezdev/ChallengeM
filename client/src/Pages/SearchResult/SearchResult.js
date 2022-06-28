import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

import Category from '../../components/Category/Category';
import Loading from '../../components/Loading/Loading';
import ListProduct from '../../components/ListProduct/ListProduct';
import { URL } from '../../components/consts/consts';

export const getProduct = async (query) => {
  const { data } = await axios.get(`${URL}?q=:${query}`);
  return data;
};

export default function SearchResult() {
  const [q] = useSearchParams();

  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  const query = `${q.get('search')}`;
  const { data, isLoading } = useQuery(['search', query], () =>
    getProduct(query)
  );

  useEffect(() => {
    setProducts(data?.items || []);
    setCategories(data?.category || []);
  }, [data, isLoading]);

  return (
    <>
      {isLoading && (
        <div className="center">
          <Loading />
        </div>
      )}
      {!isLoading && products && (
        <>
          <Category categories={categories} />
          <div className="">
            <ListProduct products={products} />
          </div>
        </>
      )}
    </>
  );
}
