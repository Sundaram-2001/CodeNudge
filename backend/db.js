const { PrismaClient } = require("@prisma/client");
const axios = require("axios");
const prisma = new PrismaClient();

const getAllMails = async () => {
    try {
        const emails = await prisma.Emails.findMany();
        return emails;
    } catch (error) {
        console.error("Error fetching emails:", error);
        throw error;
    }
};

const addEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const new_mail = await prisma.Emails.create({
            data: {
                email: email
            }
        });
        res.status(200).send({ new_mail });
    } catch (error) {
        console.error("Error adding email:", error);
        throw error;
    }
};

// Fetch daily LeetCode question
async function fetchDailyLeetCodeQuestion() {
  const query = `
    query questionOfToday {
      activeDailyCodingChallengeQuestion {
        date
        userStatus
        link
        question {
          acRate
          difficulty
          freqBar
          frontendQuestionId: questionFrontendId
          isFavor
          paidOnly: isPaidOnly
          status
          title
          titleSlug
          hasVideoSolution
          hasSolution
          topicTags {
            name
            id
            slug
          }
        }
      }
    }
  `;

  try {
    const response = await axios({
      url: 'https://leetcode.com/graphql',
      method: 'post',
      data: { query },
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const questionData = response.data.data.activeDailyCodingChallengeQuestion;
    
    if (!questionData || !questionData.link) {
      throw new Error('Invalid question data received');
    }

    const fullLink = questionData.link.startsWith('http') 
      ? questionData.link 
      : `https://leetcode.com${questionData.link}`;

    return {
      link: fullLink,
      difficulty: questionData.question.difficulty,
      acceptance:questionData.question.acRate.toFixed(2)
    };

  } catch (error) {
    console.error('Error fetching LeetCode question:', error.response?.data || error.message);
    throw error;
  }
}
module.exports = { getAllMails, addEmail, fetchDailyLeetCodeQuestion };