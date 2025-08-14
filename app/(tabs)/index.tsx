import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import TrendingCard from "@/components/TrendingCard";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
// import { getTrendingMovies } from "@/services/appwrite";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  // Temporarily disabled Appwrite trending movies
  // const{
  //   data: trendingMovies,
  //   loading: trendingMoviesLoading,
  //   error: trendingMoviesError
  // } = useFetch(getTrendingMovies)
  
  const trendingMovies = null;
  const trendingMoviesLoading = false;
  const trendingMoviesError = null;

  const {data: movies,
         loading: moviesLoading,
         error: moviesError
        } = useFetch(() => fetchMovies({ 
          query: ''
        }));
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0"/>
      <ScrollView className="flex-1 px-5"
       showsVerticalScrollIndicator={false} 
       contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}>
        <Image
          source={icons.logo}
          className="w-12 h-10 mt-20 mb-5 mx-auto"/>
          {moviesLoading || trendingMoviesLoading ?(
            <ActivityIndicator size="large" color="#0000ff" className="mt-10 self-center"/>
          ): moviesError || trendingMoviesError ? (
          <Text>Error: {moviesError?.message || trendingMoviesError?.message}</Text>
        ):(
            <View className="flex-1 mt-5">
             <SearchBar 
              onPress={() => router.push('/search')} // Function to navigate to the search page
               placeholder="Search Your Movie Here"
             />

              {trendingMovies &&(
                <View className="mt-10">
                  <Text className="text-lg text-white font-bold mb-3">Trending Movies</Text>
                </View>
              )}
               <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={()=> <View className="w-4" />}
                className="mb-4 mt-3"
                data={trendingMovies}
                renderItem={({item, index})=>(
                 <TrendingCard 
                  movie={item}
                  index={index}
                 />
                )}
                keyExtractor={(item) => item.movie_id.toString()}
              />

             <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Movies</Text>
              <FlatList className="mt-2 pb-32"
                data={movies}
                renderItem={({ item }) => (
                  // <Text className="text-white text-sm">{item.title}</Text>
                  <MovieCard 
                    {...item}
                  />
                )}
                keyExtractor={(item) => item.id.toString()} 
                numColumns={3}
                columnWrapperStyle={{ justifyContent: 'flex-start', 
                  gap: 20, paddingRight: 5, marginBottom: 10
                 }}

                 
                 scrollEnabled={false}
              />
             </>
            </View>
          
          
          )}
        
      </ScrollView>

    </View>
  );
}
