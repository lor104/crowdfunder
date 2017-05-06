class Reward < ActiveRecord::Base
  belongs_to :project
  has_many :pledges
  has_many :backers, through: :pledges, source: :user
  validates :dollar_amount, numericality: { greater_than: 0 }
  validates_presence_of :description, :dollar_amount
end
