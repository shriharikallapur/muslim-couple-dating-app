import { Client, Databases, Storage, Query, ID } from "appwrite";

export class DbService {
  client = new Client()
  databases
  bucket

  constructor () {
    this.client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65db8f273f237c6e0f70')
    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
  }

  async get(slug) {
    try {
      return await this.databases.getDocument('65ac970b25659cadae1e', '65ac9753ca5c695f1ae5', slug)
    } catch (error) {
      console.log(`error in getPost: ${error}`)
      return false
    }
  }

  async getAll(queries = [Query.select(["companyAddress", "companyName", "companyPhNo", "companyServices", "companyWebsite", "dataTime", "latitude", "longitude", "objectName", "address", "image"])]) {
    try {
      return await this.databases.listDocuments('65ac970b25659cadae1e', '65ac9753ca5c695f1ae5', queries)
    } catch (error) {
      console.log(`error in getPosts: ${error}`)
      return false
    }
  }

  async CreateUserDetails({ userID, name, nationality, originalCountry, tribe, job, currResidence, study, financialStatus, partnerSpecificationDetail, aboutYou, age, height, marriedBefore, children }) {
    console.log({ userID, name, nationality, originalCountry, tribe, job, currResidence, study, financialStatus, partnerSpecificationDetail, aboutYou, age, height, marriedBefore, children })
    try {
      const userData = await this.databases.createDocument(
        '65e085ea1eb2575f6b53',
        '65e0863ab9177a5c6797',
        ID.unique(),
        { userID, name, nationality, originalCountry, tribe, job, currResidence, study, financialStatus, partnerSpecificationDetail, aboutYou, age, height, marriedBefore, children }
      )
      console.log(userData)
      return userData
    } catch (error) {
        console.log(`error in createPost: ${error}`)
      return false
    }
  }

  async update(id, {companyName, companyAddress, companyPhNo, companyServices, companyWebsite, objectName, dataTime, address, img, latitude, longitude, status}) {
    try {
      return await this.databases.updateDocument(
        '65ac970b25659cadae1e',
        '65ac9753ca5c695f1ae5',
        id,
        { companyName, companyAddress, companyPhNo, companyServices, companyWebsite, objectName, dataTime, address, img, latitude, longitude, status }
      )
    } catch (error) {
      console.log(`error in updatePost: ${error}`)
      return false
    }
  }

  async delete(slug) {
    try {
      await this.databases.deleteDocument('65ac970b25659cadae1e', '65ac9753ca5c695f1ae5', slug)
      return true
    } catch (error) {
      console.log(`error in deletePost: ${error}`)
      return false
    }
  }


  async uploadFile(file) {
    try {
      return await this.bucket.createFile('65ac9f2a570058d3a1da', ID.unique(), file)
    } catch (error) {
        console.log("Appwrite service :: uploadFile() :: ", error);
        return false
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile('65ac9f2a570058d3a1da', fileId)
    } catch (error) {
        console.log("Appwrite service :: deleteFile() :: ", error);
        return false
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview('65ac9f2a570058d3a1da', fileId).href
  }

}

const dbServices = new DbService()
export default dbServices;