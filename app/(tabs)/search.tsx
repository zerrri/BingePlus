import MovieCard from '@/components/MovieCard'
import SearchBar from '@/components/SearchBar'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMovies } from '@/services/api'
import useFetch from '@/services/useFetch'
import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
 
  const {
    data: movies,
    loading,
    error,
    refetch: loadmovies,
    reset,
  } = useFetch(() => fetchMovies({
    query: searchQuery
  }),false); // Set initial fetch to false

  useEffect(() =>{
    

    const timeoutId = setTimeout( async () => {
      if (searchQuery.trim()) {
        await loadmovies();

      }else{
        reset();
      }
    },500); // Debounce for 500ms

    return () => clearTimeout(timeoutId); // Cleanup timeout on unmount or when searchQuery changes
  },[searchQuery]);

  // Temporarily disabled Appwrite functionality
  // useEffect(() => {
  //   if (movies?.length > 0 && movies?.[0]) {
  //         updateSearchCount(searchQuery, movies[0]);
  //       }
  // }, [movies]);

  return (
    <View className='flex-1 bg-primary '>
      <Image
      source={images.bg} className='flex-1 w-full  absolute z-0'
      resizeMode='cover'    
      />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard {...item} />}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className='w-full flex-row justify-center mt-20 items-center'>
              <Image 
                source={icons.logo}
                className='w-12 h-10'
              />
            </View>
            <View>
              <SearchBar
                placeholder='Search Your Movie Here...'
                value={searchQuery}
                onChangeText={(text : string)=>setSearchQuery(text)}
                
              />
            </View>
            {loading && (
              <ActivityIndicator size="large" color="#0000ff"
              className='my-3'/>
            )}
            {error && (
              <Text className='text-red-500 px-5 my-3'>
                Error: {error.message}</Text>
            )}
            {!loading && !error && searchQuery.trim() && movies?.length>0 &&(
            <Text className='text-xl text-white font-bold'>
              Search Result for {''}
              <Text className='text-accent'>{searchQuery}</Text>
            </Text>)}
            
            </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View className='mt-10 px-5 '>
              <Text className='text-center text-gray-500'>
                {searchQuery.trim() ? 
                  `No results found for "${searchQuery}"` : 
                  'Please enter a search term to find movies.'}
              </Text>
            </View>
          ) : null 
        }
      />
    </View>
  )
}

export default Search