class Project < ActiveRecord::Base
  has_many :rewards
  has_many :pledges, through: :rewards
  has_many :backers, through: :rewards
  accepts_nested_attributes_for :rewards
  validates :goal, numericality: { greater_than: 0 }
  validates :title, uniqueness: true
  validates_presence_of :description, :goal, :start_date, :end_date
  paginates_per 10

  def self.search(search)
    if search
      Project.where("title ILIKE ?", search)
    else
      Project.all
    end
  end
end
