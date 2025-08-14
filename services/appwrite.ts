// 2 functions will be made 
// first one will track the searches made by the user
import { Client, Databases, ID, Query } from 'react-native-appwrite';


const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!); // Your Appwrite project ID

const database = new Databases(client);

export const updateSearchCount = async (query : string , movie : Movie) => {

    try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID,[
        Query.equal('searchTerm', query),
    ]) 
    // check if the record of that search  has already been stored
    if (result.documents.length > 0) {
        const existingMovie = result.documents[0];

        await database.updateDocument(
            DATABASE_ID,
            COLLECTION_ID,
            existingMovie.$id,
            {
             // if the document  found, increment the searchCount field 
               count : existingMovie.count + 1,
            }
        )
    }else {
        // if no document found, create a new document in Appwrite database initializing the searchCount to 1
        await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
            searchTerm : query,
            movie_id : movie.id,
            count : 1,
            title : movie.title,
            poster_url : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        })
    }
    } catch (error) {
        console.error('Error updating search count:', error);
        throw error; // Re-throw the error for further handling if needed
    }

    
}

export const getTrendingMovies = async () : Promise<TrendingMovie[]| undefined> => {
    try{
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID,[
        Query.limit(5),
        Query.orderDesc('count'),
    ])
    
    return result.documents as unknown as TrendingMovie[]; // Cast to the expected type
    } catch (error) {
        console.error('Error fetching trending movies:', error);
        return undefined; 
    }
} 