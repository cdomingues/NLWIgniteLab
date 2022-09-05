import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export type OrderFirestoreDTO = {
    patrimony: string;
    description: string;
    status: 'open' | 'closed';
    solution?: string;
    created_At: FirebaseFirestoreTypes.Timestamp;
    closed_at?: FirebaseFirestoreTypes.Timestamp;
}