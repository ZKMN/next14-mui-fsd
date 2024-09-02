import { gql } from '@apollo/client';

export const RefreshTokenQuery = gql`
  query RefreshToken($token: String!) {
    refreshToken(token: $token) {
      idToken
      refreshToken
      expiresIn
    }
  }
`;

export const GetUserProfileQuery = gql`
  query UserProfile {
    getUserProfile {
      email
      lastName
      language
      firstName
      postalCode
      subscription
      dateOfBirth
      userAllergens
      phone {
        number
        countryCode
      }
    }
  }
`;

const LocationHours = gql`
  fragment LocationHoursFrag on LocationHoursPeriodInfo {
    day
    endDay
    hourFrom
    hourFromSuffix
    hourTo
    hourToSuffix
    handoffMode
  }
`;

const GenericLocation = gql`
${LocationHours}
  fragment GenericLocationResponseFrag on Location {
    id
    name
    storeName
    streetAddress
    city
    state
    country
    telephone
    zipCode
    latitude
    longitude
    timeZone
    allowedTips
    faraway
    hours {
      baseHours {
        ...LocationHoursFrag
      }
    }
    distance {
      value
      unit
    }
  }
`;

export const LocationQuery = gql`
${GenericLocation}
  query Location($id: UUID! $distanceFrom: Coordinates) {
    getLocation(id: $id distanceFrom: $distanceFrom) {
      ...GenericLocationResponseFrag
    }
  }
`;

export const CalculateBasketShortQuery = gql`
  query CalculateBasketShort {
    calculateBasket {
      locationId
      handoffMode
      campaign {
        type
        uuid
        title
        isPromo
        description
        effectiveEndDate
        fullDescription
      }
      deliveryAddress {
        building
        streetAddress
        city
        zipCode
        state
        phoneNumber
        specialInstructions
      }
      products {
        id
        name
        image
        quantity
        baseCost
        totalCost
        productId
        description
        instructions
        choices {
          type
          name
          cost
          choiceId
          quantity
          actionType
        }
      }
    }
  }
`;
