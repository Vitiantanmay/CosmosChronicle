
export interface Mission {
  name: string;
  date: string;
  agency: 'ISRO' | 'NASA' | 'SpaceX';
  description: string;
  image: string;
  outcome: 'Success' | 'Failure' | 'Ongoing' | 'Partial Success';
}
