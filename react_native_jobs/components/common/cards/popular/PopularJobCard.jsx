import { View, Text, TouchableOpacity, Image } from "react-native";

// import styles from "./popularjobcard.style";
// import { checkImageURL } from "../../../../utils";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity >
        {/* <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={styles.logoImage}
        /> */}
      </TouchableOpacity>
      <Text >
        {item.employer_name}
      </Text>

      <View >
        <Text >
          {item.job_title}
        </Text>
        <View >
          <Text >
            {item?.job_publisher} -
          </Text>
          <Text > {item.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
