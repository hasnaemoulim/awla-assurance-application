import { Claim } from '@/types/auth';

export const mockClaims: Claim[] = [
  {
    id: '1',
    code: 'AWL-241205-3847',
    userId: '2',
    userEmail: 'client@test.ma',
    userName: 'Mohammed Alami',
    type: 'Assurance Auto',
    insuranceCompany: 'AXA Assurance Maroc',
    amount: '15000',
    status: 'in-progress',
    priority: 'high',
    createdAt: '2024-12-01',
    updatedAt: '2024-12-03',
    description: 'Refus de prise en charge suite à accident de la route'
  },
  {
    id: '2',
    code: 'AWL-241203-2156',
    userId: '3',
    userEmail: 'sarah.lopez@email.ma',
    userName: 'Sarah Lopez',
    type: 'Assurance Habitation',
    insuranceCompany: 'Wafa Assurance',
    amount: '25000',
    status: 'pending',
    priority: 'medium',
    createdAt: '2024-12-03',
    updatedAt: '2024-12-03',
    description: 'Dégâts des eaux non pris en charge'
  },
  {
    id: '3',
    code: 'AWL-241201-8942',
    userId: '4',
    userEmail: 'ahmed.benali@email.ma',
    userName: 'Ahmed Benali',
    type: 'Assurance Santé',
    insuranceCompany: 'SAHAM Assurance',
    amount: '8500',
    status: 'resolved',
    priority: 'low',
    createdAt: '2024-11-28',
    updatedAt: '2024-12-02',
    description: 'Remboursement partiel des frais médicaux'
  },
  {
    id: '4',
    code: 'AWL-241204-5731',
    userId: '5',
    userEmail: 'fatima.el@email.ma',
    userName: 'Fatima El Mohri',
    type: 'Responsabilité Civile Pro',
    insuranceCompany: 'Allianz Maroc',
    amount: '50000',
    status: 'rejected',
    priority: 'high',
    createdAt: '2024-12-04',
    updatedAt: '2024-12-05',
    description: 'Litige commercial avec exclusion de garantie'
  }
];

export const getClaimsByUserId = (userId: string): Claim[] => {
  return mockClaims.filter(claim => claim.userId === userId);
};

export const getAllClaims = (): Claim[] => {
  return mockClaims;
};

export const getClaimStats = () => {
  const total = mockClaims.length;
  const pending = mockClaims.filter(c => c.status === 'pending').length;
  const inProgress = mockClaims.filter(c => c.status === 'in-progress').length;
  const resolved = mockClaims.filter(c => c.status === 'resolved').length;
  const rejected = mockClaims.filter(c => c.status === 'rejected').length;
  
  const totalAmount = mockClaims.reduce((sum, claim) => sum + parseInt(claim.amount), 0);
  const resolvedAmount = mockClaims
    .filter(c => c.status === 'resolved')
    .reduce((sum, claim) => sum + parseInt(claim.amount), 0);
  
  return {
    total,
    pending,
    inProgress,
    resolved,
    rejected,
    totalAmount,
    resolvedAmount,
    successRate: total > 0 ? Math.round((resolved / total) * 100) : 0
  };
};
