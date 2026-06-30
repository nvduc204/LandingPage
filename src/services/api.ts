import axios from 'axios';
import { product } from '../data/product';
import type { AnalyticsEvent } from '../types/product';

const client = axios.create({
  timeout: 4500,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function sendAnalyticsEvent(event: AnalyticsEvent) {
  try {
    await client.post(product.webhookUrl, event);
    return { ok: true };
  } catch {
    return { ok: false };
  }
}

export async function submitNewsletter(email: string) {
  const response = await client.post(product.webhookUrl, {
    type: 'newsletter',
    email,
    productId: product.id,
    timestamp: new Date().toISOString(),
  });

  return response.data;
}

export type OrderPayload = {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  quantity: number;
  note?: string;
};

export async function submitOrder(payload: OrderPayload) {
  const response = await client.post(product.webhookUrl, {
    type: 'preorder',
    productId: product.id,
    productName: product.name,
    total: product.price * payload.quantity,
    ...payload,
    timestamp: new Date().toISOString(),
  });

  return response.data;
}
