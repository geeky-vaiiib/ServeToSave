import axios, { AxiosResponse, AxiosError } from 'axios';

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Types
export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'donor' | 'ngo' | 'admin';
  createdAt?: string;
  updatedAt?: string;
}

export interface Donation {
  _id: string;
  donorInfo: {
    name: string;
    email: string;
    phone: string;
    businessName?: string;
    businessType?: string;
  };
  foodDetails: {
    type: string;
    dietType: string;
    items: Array<{ name: string; quantity: string }>;
    totalQuantity: number;
    unit: string;
    expiryTime: string;
    description?: string;
    images?: Array<{ filename: string; path: string }>;
  };
  location: {
    address: string;
    city: string;
    state: string;
    pincode: string;
    coordinates?: { latitude: number; longitude: number };
  };
  pickup: {
    preferredTime: string;
    logisticOption: string;
    specialInstructions?: string;
  };
  status: string;
  timestamps: {
    created: string;
  };
}

export interface Request {
  _id: string;
  requesterInfo: {
    organizationName: string;
    organizationType: string;
    contactPerson: {
      name: string;
      email: string;
      phone: string;
    };
  };
  foodRequirements: {
    type: string;
    dietType: string;
    quantity: number;
    unit: string;
    urgency: string;
    neededBy: string;
    description?: string;
  };
  deliveryLocation: {
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  beneficiaries: {
    totalCount: number;
    category: string;
  };
  status: string;
  timestamps: {
    created: string;
  };
}

export interface ImpactData {
  totalMealsRedistributed: number;
  totalDonations: number;
  totalRequests: number;
  co2SavedKg: number;
  waterSavedLiters: number;
  verifiedNGOs: number;
  activeDonors: number;
}

// Auth API
export const authAPI = {
  signup: async (userData: any) => {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  },

  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },

  updateProfile: async (profileData: any) => {
    const response = await api.put('/auth/profile', profileData);
    return response.data;
  },

  verifyEmail: async (token: string) => {
    const response = await api.get(`/auth/verify/${token}`);
    return response.data;
  },

  forgotPassword: async (email: string) => {
    const response = await api.post('/auth/forgot-password', { email });
    return response.data;
  },

  resetPassword: async (token: string, password: string) => {
    const response = await api.post(`/auth/reset-password/${token}`, { password });
    return response.data;
  },
};

// Donations API
export const donationsAPI = {
  create: async (donationData: FormData) => {
    const response = await api.post('/donations', donationData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  getAll: async (params?: any) => {
    const response = await api.get('/donations', { params });
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get(`/donations/${id}`);
    return response.data;
  },

  getNearby: async (latitude: number, longitude: number, maxDistance?: number) => {
    const response = await api.get('/donations/nearby', {
      params: { latitude, longitude, maxDistance },
    });
    return response.data;
  },

  getMyDonations: async (params?: any) => {
    const response = await api.get('/donations/user/my-donations', { params });
    return response.data;
  },

  update: async (id: string, updateData: any) => {
    const response = await api.patch(`/donations/${id}`, updateData);
    return response.data;
  },

  cancel: async (id: string) => {
    const response = await api.delete(`/donations/${id}`);
    return response.data;
  },

  getExpiringSoon: async () => {
    const response = await api.get('/donations/expiring-soon');
    return response.data;
  },
};

// Requests API
export const requestsAPI = {
  create: async (requestData: any) => {
    const response = await api.post('/requests', requestData);
    return response.data;
  },

  getAll: async (params?: any) => {
    const response = await api.get('/requests', { params });
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get(`/requests/${id}`);
    return response.data;
  },

  getNearby: async (latitude: number, longitude: number, maxDistance?: number) => {
    const response = await api.get('/requests/nearby', {
      params: { latitude, longitude, maxDistance },
    });
    return response.data;
  },

  getUrgent: async () => {
    const response = await api.get('/requests/urgent');
    return response.data;
  },

  getMyRequests: async (params?: any) => {
    const response = await api.get('/requests/user/my-requests', { params });
    return response.data;
  },

  update: async (id: string, updateData: any) => {
    const response = await api.patch(`/requests/${id}`, updateData);
    return response.data;
  },

  cancel: async (id: string) => {
    const response = await api.delete(`/requests/${id}`);
    return response.data;
  },
};

// Impact API
export const impactAPI = {
  getSummary: async () => {
    const response = await api.get('/impact/summary');
    return response.data;
  },

  getChartData: async (type: string, metric?: string) => {
    const response = await api.get('/impact/charts', {
      params: { type, metric },
    });
    return response.data;
  },

  getCityWise: async () => {
    const response = await api.get('/impact/city-wise');
    return response.data;
  },

  getFoodTypes: async () => {
    const response = await api.get('/impact/food-types');
    return response.data;
  },

  getDetailed: async (params?: any) => {
    const response = await api.get('/impact', { params });
    return response.data;
  },
};

// Logistics API
export const logisticsAPI = {
  getOptions: async () => {
    const response = await api.get('/logistics/options');
    return response.data;
  },

  getQuote: async (quoteData: any) => {
    const response = await api.post('/logistics/quote', quoteData);
    return response.data;
  },

  book: async (bookingData: any) => {
    const response = await api.post('/logistics/book', bookingData);
    return response.data;
  },

  track: async (trackingNumber: string) => {
    const response = await api.get(`/logistics/track/${trackingNumber}`);
    return response.data;
  },

  getMyBookings: async (params?: any) => {
    const response = await api.get('/logistics/user/bookings', { params });
    return response.data;
  },

  submitFeedback: async (feedbackData: any) => {
    const response = await api.post('/logistics/feedback', feedbackData);
    return response.data;
  },
};

// Utility functions
export const handleApiError = (error: any) => {
  if (error.response?.data?.message) {
    return error.response.data.message;
  } else if (error.message) {
    return error.message;
  } else {
    return 'An unexpected error occurred';
  }
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

export const getStoredUser = (): User | null => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

export const setStoredUser = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export default api;
