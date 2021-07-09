import { gql } from "@apollo/client";

export const GET_SERVICES = gql`
  query getServices($serviceArea: String, $offset: Int, $take: Int) {
    getServices(serviceArea: $serviceArea, offset: $offset, take: $take) {
      server {
        name
        avatar
        selfAuthentication
        idCardAuthentication
        licenseAuthentication
        authCount
      }

      rate
      id
      classType
      lessonType
      timePerClass
      serviceArea
      price
      displayPrice
      displayPreviewPrice
      title
      liking
      displayClassType

      category {
        title
      }
    }
  }
`;

export const GET_LIKED_SERVICES = gql`
  query getLikedServices {
    getLikedServices {
      server {
        name
        avatar
        selfAuthentication
        idCardAuthentication
        licenseAuthentication
        authCount
      }

      rate
      id
      classType
      lessonType
      timePerClass
      serviceArea
      price
      displayPrice
      displayPreviewPrice
      title
      liking
      displayClassType

      category {
        title
      }
    }
  }
`;

export const SEARCH_SEVICES = gql`
  query searchServices(
    $serviceArea: String
    $offset: Int
    $take: Int
    $term: String
    $categoryIds: [String]
    $classTypes: [ClassType]
    $min: Int
    $max: Int
    $orderBy: OrderByInput
  ) {
    searchServices(
      serviceArea: $serviceArea
      offset: $offset
      take: $take
      term: $term
      categoryIds: $categoryIds
      classTypes: $classTypes
      min: $min
      max: $max
      orderBy: $orderBy
    ) {
      server {
        name
        avatar
        selfAuthentication
        idCardAuthentication
        licenseAuthentication
        authCount
      }

      rate
      id
      classType
      lessonType
      timePerClass
      serviceArea
      price
      displayPrice
      displayPreviewPrice
      title
      liking
      displayClassType

      category {
        title
      }
    }
  }
`;

export const GET_HOT_SERVICES = gql`
  query getHotServices($serviceArea: String, $offset: Int, $take: Int) {
    getHotServices(serviceArea: $serviceArea, offset: $offset, take: $take) {
      server {
        name
        avatar
        selfAuthentication
        idCardAuthentication
        licenseAuthentication
        authCount
      }

      rate
      id
      classType
      lessonType
      timePerClass
      serviceArea
      price
      displayPrice
      displayPreviewPrice
      title
      liking
      displayClassType

      category {
        title
      }
    }
  }
`;

export const GET_SERVICE = gql`
  query getService($serviceId: String!) {
    getService(serviceId: $serviceId) {
      ok
      isNormal
      service {
        id
        title
        price
        serviceArea
        displayPrice
        previewPrice
        displayPreviewPrice
        timePerClass
        numOfClass
        classType
        displayClassType
        displayLessonType
        includeSupplies
        lessonType
        explain
        guide
        curriculum
        images
        cancelPolicy
        rate
        reviewCount
        liking
        isMine
        server {
          id
          avatar
          name
          workingArea
          rate
          selfAuthentication
          idCardAuthentication
          licenseAuthentication
          tutorProfile {
            category {
              id
              title
            }
          }
        }
        availableDate {
          mon
          tue
          wed
          thu
          fri
          sat
          sun
        }
        reviews {
          id
          body
          from {
            id
            avatar
            name
            createdAt
          }
          isMine
          rate
          createdAt
        }
        category {
          title
        }
      }
      error
    }
  }
`;

export const LIKE_SERVICE = gql`
  mutation likeService($serviceId: String!) {
    likeService(serviceId: $serviceId) {
      ok
      error
    }
  }
`;
export const UNLIKE_SERVICE = gql`
  mutation unlikeService($serviceId: String!) {
    unlikeService(serviceId: $serviceId) {
      ok
      error
    }
  }
`;

export const GET_MY_SERVICES = gql`
  query getMyServices {
    getMyServices {
      ok
      services {
        id
        title
        serviceState
        totalSell
        sellCount
        server {
          id
          name
          avatar
          authCount
          selfAuthentication
          idCardAuthentication
          licenseAuthentication
        }
        availableDate {
          id
          mon
          tue
          wed
          thu
          fri
          sat
          sun
        }
        category {
          id
          title
        }
        serviceArea
        classType
        lessonType
        numOfClass
        timePerClass
        price
        includeSupplies
        previewPrice
        explain
        guide
        curriculum
        images
        step
        liking
        displayClassType
        rate
        displayPrice
        idNumber
        displayIdNumber
      }
      error
    }
  }
`;

export const CREATE_SERVICE = gql`
  mutation createService(
    $serviceId: String
    $title: String
    $categoryId: String
    $serviceArea: String
    $classType: ClassType
    $lessonType: LessonType
    $numOfClass: String
    $timePerClass: String
    $mon: String
    $tue: String
    $wed: String
    $thu: String
    $fri: String
    $sat: String
    $sun: String
    $price: Int
    $includeSupplies: Boolean
    $previewPrice: Int
    $explain: String
    $guide: String
    $cancelPolicy: String
    $curriculum: [String!]
    $images: [Upload!]
    $step: Int
    $done: Boolean
    $serviceState: ServiceState
    $imagesUrl: [String!]
  ) {
    createService(
      serviceId: $serviceId
      title: $title
      categoryId: $categoryId
      serviceArea: $serviceArea
      classType: $classType
      lessonType: $lessonType
      numOfClass: $numOfClass
      timePerClass: $timePerClass
      mon: $mon
      tue: $tue
      wed: $wed
      thu: $thu
      fri: $fri
      sat: $sat
      sun: $sun
      price: $price
      includeSupplies: $includeSupplies
      previewPrice: $previewPrice
      explain: $explain
      guide: $guide
      cancelPolicy: $cancelPolicy
      curriculum: $curriculum
      images: $images
      step: $step
      done: $done
      serviceState: $serviceState
      imagesUrl: $imagesUrl
    ) {
      ok
      service {
        id
      }
      error
    }
  }
`;

export const DELETE_MY_SERVICE = gql`
  mutation deleteMyService($serviceId: String!) {
    deleteMyService(serviceId: $serviceId) {
      ok
      error
    }
  }
`;

export const STOP_SERVICE = gql`
  mutation stopService($serviceId: String) {
    stopService(serviceId: $serviceId) {
      ok
      error
    }
  }
`;

export const GET_TUTOR_SERVICES = gql`
  query getTutorServices($userId: String!) {
    getTutorServices(userId: $userId) {
      ok
      services {
        id
        title
        serviceState
        totalSell
        sellCount
        server {
          id
          name
          avatar
          authCount
          selfAuthentication
          idCardAuthentication
          licenseAuthentication
        }
        availableDate {
          id
          mon
          tue
          wed
          thu
          fri
          sat
          sun
        }
        category {
          id
          title
        }
        serviceArea
        classType
        lessonType
        numOfClass
        timePerClass
        price
        includeSupplies
        previewPrice
        explain
        guide
        curriculum
        images
        step
        liking
        displayClassType
        rate
        displayPrice
        idNumber
        displayIdNumber
      }
      error
    }
  }
`;
