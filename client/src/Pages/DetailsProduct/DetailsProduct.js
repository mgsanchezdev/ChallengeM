import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading/Loading';
import Category from '../../components/Category/Category';
import { URL } from '../../components/consts/consts';
import CardDetailsProduct from '../../components/CardDetailsProduct/CardDetailsProduct';

export const getProduct = async (id) => {
  const url = `${URL}${id}`;
  const { data } = await axios.get(url);
  return data;
};

function DetailsProduc() {
  const { id } = useParams();
  const { data, isLoading } = useQuery(['details', id], () => getProduct(id));
  const detailsProducts = data?.item;

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Category categories={data?.category} />
      <CardDetailsProduct detailsProducts={detailsProducts} />
    </>
  );
}

export default DetailsProduc;
